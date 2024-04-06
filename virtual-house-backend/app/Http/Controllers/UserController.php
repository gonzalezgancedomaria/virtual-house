<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
     /**
     * Listado de los usuarios
     * @OA\Get (
     *     path="/users",
     *     tags={"Users"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="array",
     *                 property="users",
     *                 @OA\Items(
     *                     type="object",
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function index()
    {
        $users = User::getAll();

        return response()->json($users);
    }

    /**
     * Login de usuario
     * @OA\Post (
     *     path="/login",
     *     tags={"Users"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="object",
     *             )
     *         )
     *     )
     * )
     */
    public function login(Request $request)
    {
        $user = User::login($request);

        return response()->json($user);
    }

    /**
     * Registro de usuario
     * @OA\Post (
     *     path="/signup",
     *     tags={"Users"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="object",
     *             )
     *         )
     *     )
     * )
     */
    public function store(Request $request)
    {
        error_log($request);
        $user = User::signup($request);

        return response()->json($user);
    }

    /**
     * Mostrar un usuario
     * @OA\Get (
     *     path="/users/{id}",
     *     tags={"Users"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="object",
     *             )
     *         )
     *     )
     * )
     */
    public function show($id)
    {
        $user = User::getById($id);

        return response()->json($user);
    }

    /**
     * Editar un usuario
     * @OA\Put (
     *     path="/users/{id}",
     *     tags={"Users"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="object",
     *             )
     *         )
     *     )
     * )
     */
    public function update(Request $request, $id)
    {
        $user = User::modify($request);

        return response()->json($user);
    }

    /**
     * Eliminar un usuario
     * @OA\Delete (
     *     path="/users/{id}",
     *     tags={"Users"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="object",
     *             )
     *         )
     *     )
     * )
     */
    public function destroy($id)
    {
        User::remove($id);
    }
}
