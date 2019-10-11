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
    protected $idUser;
    protected $idDefect;
    protected $content;
    protected $date;

    /**
     * CommentClass constructor.
     * @param $idUser
     * @param $idDefect
     * @param $content
     * @param $date
     */
    public function __construct($idUser, $idDefect, $content, $date)
    {
        $this->idUser = $idUser;
        $this->idDefect = $idDefect;
        $this->content = $content;
        $this->date = $date;
    }

    /**
     * @return mixed
     */
    public function getIdUser()
    {
        return $this->idUser;
    }

    /**
     * @return mixed
     */
    public function getIdDefect()
    {
        return $this->idDefect;
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