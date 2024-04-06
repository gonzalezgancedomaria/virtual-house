<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSensorVirtualHouseTable extends Migration
{
    public function up()
    {
        Schema::create('sensor_virtual_house', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('virtual_house_id');
            $table->unsignedBigInteger('sensor_id');
            $table->timestamps();

            $table->foreign('virtual_house_id')->references('virtual_house_id')->on('virtual_houses')->onDelete('cascade');
            $table->foreign('sensor_id')->references('sensor_id')->on('sensors')->onDelete('cascade');

            $table->unique(['virtual_house_id', 'sensor_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('sensor_virtual_house');
    }
}
