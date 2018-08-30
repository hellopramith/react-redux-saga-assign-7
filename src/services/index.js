import axios from 'axios';

export function getAllBoards() {
    axios.get('/api/boardsList').then(result => new Promise((resolve, reject) => {
        resolve(result.data);
    }));
}

export function getBoard(boardId) {
    axios.get(`api/board/${boardId}`).then(result => new Promise((resolve,reject) => {
        resolve(result.data);
    }));
}