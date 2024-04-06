<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSensorsTable extends Migration
{
    public function up()
    {
        Schema::create('sensors', function (Blueprint $table) {
            $table->id('sensor_id');
            $table->string('sensor_name');
            $table->text('description');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('sensors');
    }
}
