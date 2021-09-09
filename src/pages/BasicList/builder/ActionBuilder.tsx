import { Button } from 'antd';

const ActionBuilder = (actions: any) => {
  return (actions || []).map((action: any) => {
    if (action.component === 'button') {
      return (
        <Button key={action.text} type={action.type}>
          {action.text}
        </Button>
      );
    }
    return null;
  });
};

export default ActionBuilder;
