import React, { useState, FC, useEffect } from 'react'
import { Modal, Form, Input, DatePicker, Switch } from 'antd'
import moment from 'moment'

interface UserModalType {
  visible: boolean
  setIsModalVisible: (is: boolean) => void
  record: object
  onFinish: (values: any) => void
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const UserModal: FC<UserModalType> = (props) => {
  const [form] = Form.useForm()
  const { visible, setIsModalVisible, record, onFinish } = props

  useEffect(() => {
    if (record === undefined) {
      form.resetFields()
    } else {
      form.setFieldsValue({
        ...record,
        create_time: moment(record.create_time),
        status: Boolean(record.status),
      })
    }
  }, [visible])

  const handleOk = () => {
    form.submit();
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal title="Edit ID: " visible={visible} onOk={handleOk} onCancel={handleCancel} forceRender>
      <Form
        {...layout}
        name="basic"
        form={form}
        onFinish={onFinish}
        initialValues={{
          status: true,
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          key="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" key="email">
          <Input />
        </Form.Item>
        <Form.Item label="Create Time" name="create_time" key="create_time">
          <DatePicker showTime />
        </Form.Item>
        <Form.Item label="Status" name="status" valuePropName="checked" key="status">
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UserModal
