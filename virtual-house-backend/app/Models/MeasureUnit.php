<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MeasureUnit extends Model
{
    use HasFactory;

    protected $fillable = [
        'measure_unit_name',
        'abbreviation',
    ];

    public function hotspots()
    {
        return $this->hasMany(Hotspot::class);
    }

    public static function getAll()
    {
        $measureUnits = DB::table('measure_unit')->get();
        
        return $measureUnits;
    }

    public static function getById($id)
    {
        $user = DB::table('measure_unit')
            ->where('measure_unit_id', $id)->get();
            
        return $user;
    }

}
