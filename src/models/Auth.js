import Swal from 'sweetalert2'
import {sendPost, sendGet} from '@/models/ApiCall';

export async function authenticate(email, password) {
    
    const response = await sendPost(`/token`, {username: email, password: password});

    if ( response.status != 201 ) {
        Swal.fire({
            title: "Umm",
            text: "Unable to login",
            icon: "error"
        });
    } else {
        localStorage.setItem('user_token', response.data.access_token);
    }
    
}

// nishawl.naseer@outlook.com
// h0KcT2U8tFJZ5H1LSexLBQ6T