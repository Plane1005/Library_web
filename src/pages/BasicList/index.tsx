/* eslint-disable no-param-reassign */
import { Table, Row, Col, Card, Pagination, Space } from 'antd';
import { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ColumnBuilder from './builder/ColumnBuilder';
import { useRequest } from 'umi';
import styles from './index.less';
import ActionBuilder from './builder/ActionBuilder';

const BasicList = () => {
  const [page, setPage] = useState<number>(1);
  const [per_page, setPerPage] = useState<number>(10);

  const init = useRequest<{ data: BasicListApi.Data }>(
    `https://public-api-v2.aspirantzhang.com/api/admins?X-API-KEY=antd&page=${page}&per_page=${per_page}`,
  );

  useEffect(() => {
    init.run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, per_page]);

  const pagenationChangeHandler = (_page: any, _per_page: any) => {
    setPage(_page);
    setPerPage(_per_page);
  };

  const searchLayout = () => {};

  const beforeTableLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          ...
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Space>{ActionBuilder(init.data?.layout.tableToolBar)}</Space>
        </Col>
      </Row>
    );
  };

  const afterTableLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          ...
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Pagination
            total={init.data?.meta.total || 0}
            current={init.data?.meta.page || 1}
            pageSize={init.data?.meta.per_page || 10}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `Total ${total} items`}
            onChange={pagenationChangeHandler}
            onShowSizeChange={pagenationChangeHandler}
          />
        </Col>
      </Row>
    );
  };

  return (
    <PageContainer>
      {searchLayout()}
      <Card>
        {beforeTableLayout()}
        <Table
          rowKey="id"
          dataSource={init?.data?.dataSource}
          columns={ColumnBuilder(init.data?.layout?.tableColumn)}
          pagination={false}
          loading={init.loading}
        />
        {afterTableLayout()}
      </Card>
    </PageContainer>
  );
};

export default BasicList;
