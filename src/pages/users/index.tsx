import { Table, Tag, Space } from 'antd'
import { useState } from 'react'
import { connect } from 'umi'
import UserModal from './compoments/UserModal'

const UserListPage = ({ users, dispatch }) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [record, setRecord] = useState({})
  const [confirmLoading, setConfirmLoading] = useState(false);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      valueType: 'digit',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      valueType: 'text',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Create Time',
      dataIndex: 'create_time',
      valueType: 'dateTime',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      valueType: 'option',
      render: (text: any, record: any) => [<a style={{marginRight:'5px'}} onClick={() => {setRecord(record),setIsModalVisible(true)}} key="edit">Edit</a>, <a key="delete" >Delete</a>],
    },
  ]

  const onFinish = (values) =>{
      const id = record.id

    dispatch({
        type:'users/edit',
        payload: {id,values}
    })
    setIsModalVisible(false)
  }

  return (
    <div className="list-table">
      <Table columns={columns} dataSource={users} rowKey="id" />
      <UserModal visible={isModalVisible} setIsModalVisible={setIsModalVisible} record={record} onFinish={onFinish} ></UserModal>
    </div>
  )
}

const mapStateToProps = (data: any) => {
  return {
    users: data.users.data,
  }
}

export default connect(mapStateToProps)(UserListPage)
