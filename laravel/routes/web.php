<?php
Route::get('/', 'SinglePageController@index')->where('any', '.*');