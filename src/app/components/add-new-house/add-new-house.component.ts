import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileUploadService } from '../../services/file-update.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfigInfoComponent } from '../dialogs/config-info/config-info.component';

@Component({
  selector: 'app-add-new-house',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatToolbarModule, MatProgressBarModule],
  templateUrl: './add-new-house.component.html',
  styleUrl: './add-new-house.component.scss'
})
export class AddNewHouseComponent {
  form: FormGroup;
  fileName = 'Select File';
  message = '';
  currentFile?: File;
  progress = 0;
  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService, private dialog: MatDialog) {
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])),
      description: new FormControl(''),
      creationDate: new FormControl(''),
      location: new FormControl(''),
      features: new FormControl(''),
      configuration: new FormControl('')
    });
  }

  public save(){}

  get configFormControl() {
    return this.form.get('configuration');
  }

  public openConfigInfo() {
    this.dialog.open(ConfigInfoComponent, {
      width: '30rem',
      height: '10rem'
    })
  }

  public onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = () => {
        try {
          const fileContent = JSON.parse(reader.result as string);
          this.configFormControl.setValue(fileContent); // Puedes almacenar el archivo en el FormGroup si es necesario
          this.configFormControl.setErrors(null);
        } catch (e) {
          this.configFormControl.setErrors({ 'jsonFormat': true });
        }
      };
      reader.onerror = () => {
        console.error('Error al leer el archivo');
      };
    }
  }

  upload(): void {
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
        },
        complete: () => {
          this.currentFile = undefined;
        }
      });
    }
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }
}
