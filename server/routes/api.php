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
Route::group(['prefix' => 'v1', 'namespace' => 'API'], function () {

    Route::apiResource('users', 'UserController');
    Route::get('/users/{user}/login', 'UserController@getUserByLogin');
    Route::get('/users/{defect}/defect', 'UserController@getUserByDefect');
    Route::put('/users/{user}/password/update', 'UserController@updatePassword');

    Route::apiResource('rooms', 'RoomController');

    Route::apiResource('ratings', 'RatingController');

    Route::apiResource('places', 'PlaceController');

    Route::apiResource('follows', 'FollowController');
    Route::get('/follows/{follow}/user', 'FollowController@getFollowByIdUser');

    Route::apiResource('defects', 'DefectController');
    Route::get('/defects/{defect}/room', 'DefectController@getParticularRoom');
    Route::get('/defects/{defect}/place', 'DefectController@getParticularPlace');

    Route::apiResource('comments', 'CommentController');
    Route::get('/comments/{comment}/user', 'CommentController@getCommentByIdUser');
    Route::get('/comments/{comment}/defect', 'CommentController@getFollowByIdDefect');

    Route::apiResource('markers', 'MarkerController');
    Route::get('/all/markers', 'MarkerController@getAll');
    Route::get('/markers/{marker}/count', 'MarkerController@getDefectCount');

    Route::apiResource('images', 'ImageController');
});

Route::group([
    'prefix' => 'auth', 'namespace' => 'Auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');

    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});
