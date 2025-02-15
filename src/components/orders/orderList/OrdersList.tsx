import { getOrdersApi } from '@/service/ordersApi';
import React from 'react';
import styles from './orderList.module.scss';
import Image from 'next/image';

const OrdersList = async ({
  status = 'active',
  timestamp = 'last-3-months',
}: {
  status?: string;
  timestamp?: string;
}) => {
  const orders = await getOrdersApi(status, timestamp);
  const orderData = orders?.data || [];

  return (
    <div className={styles.ordersWrapper}>
      <div className={styles.ordersContainer}>
        {orderData.length === 0 ? (
          <div className={styles.noOrdersMessage}>No orders found</div>
        ) : (
          <ul className={styles.ordersList}>
            {orderData.map((order) => (
              <li key={order._id} className={styles.orderItem}>
                <div className={styles.orderHeader}>
                  <div className={styles.orderNumber}>
                    {order.nrOrder
                      ? `Order Number: ${order.nrOrder}`
                      : 'Order Number: N/A'}
                  </div>
                  <div className={styles.orderDate}>
                    {order.createdAt ? (
                      <>
                        <span>
                          {new Date(order.createdAt)
                            .toLocaleDateString()
                            .replace(/(?<=\d)\/(?=\d)/g, ' / ')}
                        </span>
                        {' | '}
                        <span>
                          {new Date(order.createdAt).getHours()}:
                          {new Date(order.createdAt).getMinutes()}
                        </span>
                        {' - '}
                        <span>Total: {order.totalAmount} Lei</span>
                      </>
                    ) : (
                      'Date: N/A'
                    )}
                  </div>
                </div>
                <div className={styles.orderDetails}>
                  <div className={styles.vendorInfo}>
                    <div className={styles.vendorDetails}>
                      <div className={styles.vendorName}>
                        Sold and delivered by Alcrro
                      </div>
                      <div className={styles.vendorReviewPrompt}>
                        Leave a review for the vendor
                      </div>
                    </div>
                    <div className={styles.productImageWrapper}>
                      <Image
                        src={'/me.png'}
                        alt="Product Image"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className={styles.orderSummary}>
                    <div className={styles.orderSummery_inner}>
                      <div className={styles.orderPriceDetails}>
                        <span>Subtotal: 10 Lei</span>
                      </div>
                      <div className={styles.orderStatusContainer}>
                        <div className={styles.paymentStatus}>
                          Payment Accepted
                        </div>
                      </div>
                    </div>
                    <div className={styles.trackingInfo}>Track Shipment</div>
                  </div>
                </div>
                <div className={styles.orderFooter}>
                  <div className={styles.viewOrderDetails}>View Details</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrdersList;
