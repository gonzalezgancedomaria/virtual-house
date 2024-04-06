<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'surname',
        'role',
        'phone',
        'email',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function sensors()
    {
        return $this->hasMany(Hotspot::class);
    }

    public static function getAll()
    {
        $users = DB::table('USER')->get();
        
        return $users;
    }

    public static function getById($id)
    {
        $user = DB::table('USER')
            ->where('user_id', $id)->get();
            
        return $user;
    }

    public static function login(Request $request)
    {
        $user = DB::table('USER')
            ->where('email', $request->email)
            ->where('password',  $request->password)
            ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], 404);
        }
    
        $token = $user->createToken('my-app-token')->plainTextToken;
    
        $response = [
            'user' => $user,
            'token' => $token
        ];
    
        return $user;
    }

    public static function signup(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'surname' => 'required',
            'role_id' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required',
            'password' => 'required|min:6',
        ]);

        $user = DB::table('USER')->insert([
            'user_id' => $request->user_id,
            'name' => $request->name,
            'surname' => $request->surname,
            'role_id' => $request->role_id,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        return $user;
    }

    public static function modify(Request $request)
    {
        return DB::table('USER')
            ->where('user_id', $request->user_id) 
            ->update([
                'user_id' => $request->user_id,
                'name' => $request->name,
                'surname' => $request->surname,
                'role_id' => $request->role_id,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => $request->password,
            ]);
    }


    public static function remove($id)
    {
        DB::table('configurates')
        ->where('user_id', $id)
        ->delete();

        DB::table('USER')
            ->where('user_id', $id)
            ->delete();
    }
}
