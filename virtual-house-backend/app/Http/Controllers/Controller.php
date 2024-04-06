<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;

 /**
* @OA\Info(
*             title="Virtual houses API", 
*             version="1.0",
*             description=""
* )
*
* @OA\Server(url="http://127.0.0.1:8000")
*/
abstract class Controller
{
    use AuthorizesRequests, ValidatesRequests;
}
