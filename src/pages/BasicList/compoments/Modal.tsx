import { Modal } from 'antd';

interface JetModalType {
  isModalVisible: boolean;
}

const JetModal = (props: JetModalType) => {
  // const init = useRequest<{ data: BasicListApi.Data }>(
  //   `https://public-api-v2.aspirantzhang.com/api/admins?X-API-KEY=antd&page=${page}&per_page=${per_page}`,
  // );
  const { isModalVisible } = props;

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        // onOk={handleOk}
        // onCancel={handleCancel}
      >
        123
      </Modal>
    </>
  );
};

export default JetModal;
