<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('virtual_houses', function (Blueprint $table) {
            $table->id('virtual_house_id');
            $table->string('virtual_house_name');
            $table->text('features');
            $table->string('location');
            $table->timestamp('creation_date')->useCurrent();
            $table->json('configuration');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('virtual_houses');
    }
};
