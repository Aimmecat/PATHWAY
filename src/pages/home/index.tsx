/*
 * @文件描述: 首页
 * @公司: superv
 * @作者: 李洪文
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-09 15:40:17
 * @LastEditTime: 2021-05-26 14:57:12
 */
import { useEffect, useState } from 'react';
import styles from './index.less';
import Card from '@/components/Card';
export const interval = 5000;
export const MAX_MONITOR_RECORD_SIZE = 20;

export default function Component() {
  const [stats1, setStats1] = useState(0);
  const [stats2, setStats2] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStats1(stats1 + 1);
      setStats2(stats2 + 1);
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Card title="日志">
        <div className={styles.totalList}>
          <div className={[styles.totalItem, styles.item2].join(' ')}>
            <div className={styles.text}>
              <div className={styles.title}>已完成信号通路数量</div>
              <div className={styles.value}>1</div>
            </div>
          </div>

          <div className={[styles.totalItem, styles.item3].join(' ')}>
            <div className={styles.text}>
              <div className={styles.title}>版本号</div>
              <div className={styles.value}>V1.0</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
