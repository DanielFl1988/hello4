let statusId: number = 300;
switch (statusId) {
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