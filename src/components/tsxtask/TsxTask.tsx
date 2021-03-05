import React from 'react';
import '../../index.css';

export interface TsxTaskItem {
    id:string,
    title:string,
    state:string
}

export interface TsxTaskProps {
    task:TsxTaskItem,
    onArchiveTask:(id:string) => void,
    onPinTask:(id:string) => void,
}

const TsxTask = (props:TsxTaskProps) => {
    return (
        <div className={`list-item ${props.task.state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={props.task.state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => props.onArchiveTask(props.task.id)}/>
            </label>
            <div className="title">
                <input
                    type="text"
                    value={props.task.title}
                    readOnly={true}
                    placeholder="Input title"
                    style={{
                        background: 'red'
                    }}
                />
            </div>
            <div
                className="actions"
                onClick={event => event.stopPropagation()}
            >
                {
                    props.task.state !== 'TASK_ARCHIVED' &&
                    <a
                      href={'/#'}
                      onClick={() => props.onPinTask(props.task.id)}
                    >
                      <span className={`icon-star`} />
                    </a>
                }
            </div>
        </div>
    );
};

export default TsxTask;
