<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\VirtualHouseController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/users', [UserController::class, 'index']);
Route::get('/virtualHouses', [VirtualHouseController::class, 'index']);

Route::controller(UserController::class)->prefix('users')->group(function(){
    Route::get('/','index');
    Route::post('/','store');
    Route::post('/login','login');
    Route::post('/inicio','login');
    Route::get('/{id}','show');
    Route::post('/{id}','update');
    Route::delete('/{id}','destroy');
});

Route::controller(VirtualHouseController::class)->prefix('virtualHouses')->group(function(){
    Route::get('/','index');
    Route::post('/','store');
    Route::get('/{id}','show');
    Route::post('/{id}','update');
    Route::delete('/{id}','destroy');
});
