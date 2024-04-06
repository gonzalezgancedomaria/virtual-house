<?php

use App\Http\Controllers\HotspotController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VirtualHouseController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MeasureUnitController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [UserController::class, 'login']);
Route::get('/signup', [UserController::class, 'store']);

Route::controller(UserController::class)->prefix('users')->group(function(){
    Route::get('/','index');
    Route::get('/{id}','show');
    Route::put('/{id}','update');
    Route::delete('/{id}','destroy');
});

Route::controller(VirtualHouseController::class)->prefix('virtual-houses')->group(function(){
    Route::get('/','index');
    Route::post('/','store');
    Route::get('/{id}','show');
    Route::delete('/{id}','destroy');
});

Route::get('/measure-units', [MeasureUnitController::class, 'index']);

Route::controller(HotspotController::class)->prefix('hotspots')->group(function(){
    Route::get('/','index');
    Route::post('/','store');
    Route::get('/{id}','show');
    Route::delete('/{id}','destroy');
});