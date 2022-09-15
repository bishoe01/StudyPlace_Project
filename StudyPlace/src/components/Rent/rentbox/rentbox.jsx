import { Button, message, Radio, Steps } from 'antd';
import React, { useState } from 'react';
import styles from './rentbox.module.css';
const { Step } = Steps;
const steps = [
    {
        title: '팀플실 선택',
        content: 'first',
    },
    {
        title: '날짜 선택',
        content: 'Second-content',
    },
    {
        title: '이용시간 선택',
        content: 'Last-content',
    },
];

const RentBox = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Steps current={current}>
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className={styles.steps_content}>
                {/* {steps[current].content} */}
                <LayoutSelectForm/>
                </div>
            <div className={styles.steps_action}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default RentBox;

function LayoutSelectForm() {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>팀플실</Radio>
      <Radio value={2}>스터디룸</Radio>
      <Radio value={3}>컨퍼런스룸</Radio>
    </Radio.Group>
  );
}

