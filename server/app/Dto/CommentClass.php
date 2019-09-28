<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:24
 */

namespace App\Dto;


class CommentClass
{
    protected $content;
    protected $date;

    /**
     * CommentClass constructor.
     * @param $content
     * @param $date
     */
    public function __construct($content, $date)
    {
        $this->content = $content;
        $this->date = $date;
    }

    /**
     * @return mixed
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }





}