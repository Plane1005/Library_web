import { Table, Tag, Space } from 'antd'
import { connect } from 'umi'

const UserListPage = ({ users }) => {
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
      render: (text: any, record) => [<a>Edit</a>, <a>Delete</a>],
    },
  ]

  return (
    <div className="list-table">
      <Table columns={columns} dataSource={users} />
    </div>
  )
}

const mapStateToProps = (data: any) => {
  return {
    users: data.users.data,
  }
}

export default connect(mapStateToProps)(UserListPage)
