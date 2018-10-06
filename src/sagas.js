import { put, takeEvery, all, call, fork, takeLatest,  cancel, select, take} from 'redux-saga/effects';

const delay = (ms) => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res('asasas')
        }, ms)
    })
}

export function* helloSaga() {
    console.log('Hello Sagas!')


}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
    const task  = yield call(delay, 1000);
    const state = yield select()
    console.log('ad, state',task, state);

    yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* watchMethods(action) {
    const {payload} = action;
    // const task  = yield take("CONTINUE", "CANCEL");

   console.log(task);
    const origAction = { type: payload.type, value: payload.value };
    yield put(origAction);
}

export function* watchControl(payload) {

}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    let task;
    while (task = yield take("METHODS")) {
        // starts the task in the background
        const bgSyncTask = yield fork(watchMethods, task)
        console.log(bgSyncTask)

        // wait for the user stop action
        const control = yield take("CONTROL")
        // user clicked stop. cancel the background task
        // this will cause the forked bgSync task to jump into its finally block
        if(control.payload && control.payload.command === "cancel") {
            console.log("cancel")
            yield put("CANCEL")
        }
        else  if(control.payload && control.payload.command === "continue") {
            console.log("continue")
            yield put("CONTINUE")
        }
    }
    // yield takeLatest("METHODS", watchMethods);
    // yield takeLatest("CONTROL", watchControl);
}

//========================
