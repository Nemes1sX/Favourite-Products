<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        $user = User::where('email', $credentials['email'])->get();
        if(!$user) {
            return response()->json([
                'error' => "User don't exist"
            ], 401);
        }
        if (!auth()->attempt($credentials)) {
            return response()->json(['error' => 'Invalid password or username'], 401);
        }
        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        return response()->json(['access_token' => $accessToken], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'status' => 'success',
            'message' => 'Logged out Successfully.'
        ], 200);
    }
}
