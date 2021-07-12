//let komentarz: string = Success;

enum komentarz {
    Success = 200,
    Accepted = 202,
    Unauthorized = 401,
    Forbidden = 403,
    Not_found = 404,
    Server_Error = 500,
}

function respond(message: komentarz): void {}
respond

switch (komentarz) {
    case 200:
        console.log('Success');
        break;
    case 202:
        console.log('Accepted');
        break;
    case 401:
        console.log('Unauthorized');
        break;
    case 403:
        console.log('Forbidden');
        break;
    case 404:
        console.log('Not Found');
        break;
    case 500:
        console.log('Server Error');
        break;
}