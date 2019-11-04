<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'name','type','size','idDefect'];
    public $timestamps = false;
}
