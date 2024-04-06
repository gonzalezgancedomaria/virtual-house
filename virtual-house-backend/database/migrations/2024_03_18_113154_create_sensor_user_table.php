<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSensorUserTable extends Migration
{
    public function up()
    {
        Schema::create('sensor_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('sensor_id');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('sensor_id')->references('sensor_id')->on('sensors')->onDelete('cascade');

            $table->unique(['user_id', 'sensor_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('sensor_user');
    }
}
