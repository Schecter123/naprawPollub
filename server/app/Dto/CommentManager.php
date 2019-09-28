<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:24
 */

namespace App\Dto;


use App\Comment;

class CommentManager
{
    public function add(CommentClass $commentClass)
    {
        $comment = new Comment;
        $comment->content = $commentClass->getContent();
        $comment->date = $commentClass->getDate();

        $comment->save();
    }

}