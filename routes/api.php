<?php

use Illuminate\Http\Request;
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

Route::get('/index', [\App\Http\Controllers\ProductController::class, 'index'])->name('product.index');
Route::middleware('auth:api')->group(function () {
   Route::resource('favourite', \App\Http\Controllers\FavouriteController::class)
       ->only('index', 'store', 'destroy');
   Route::post('/logout', [\App\Http\Controllers\Auth\LoginController::class, 'logout']);
});
   Route::post('login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');


