<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::group(['prefix' => 'v1','namespace' => 'API'], function(){
    Route::apiResource('users', 'UserController');
    Route::apiResource('rooms', 'RoomController');
    Route::apiResource('ratings', 'RatingController');
    Route::apiResource('places', 'PlaceController');
    Route::apiResource('follows', 'FollowController');
    Route::apiResource('defects', 'DefectController');
    Route::apiResource('comments', 'CommentController');
});
