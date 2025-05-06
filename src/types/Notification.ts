interface INotification {
  _id: string;
  userId: string;
  titleNotification: string;
  message: string;
  category: string;
  priority: string;
  createdAt: Date;
  expirationDate: Date;
  __v: 0;
  viewed: boolean;
}
