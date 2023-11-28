class NotificationSender {
  constructor(status) {
    this.status = status;
  }

  sendNotification(notification) {
    console.log("Sending: " + notification);
  }

  findUserWithStatus(status) {
    let users = getUsers(status);
    return users;
  }
}

class PromotionSender extends NotificationSender {
  constructor(status) {
    super(status);
  }

  calculateDiscount(status) {
    if (status === "GOLD") {
      return 0.3;
    } else if (status === "SILVER") {
      return 0.15;
    }
    return 0;
  }
}

class CollectionSender extends NotificationSender {
  constructor(status) {
    super(status);
  }

  calculateFee(status) {
    if (status === "OVERDUE") {
      return 10;
    } else if (status === "DELIQUENT") {
      return 25;
    }
    return 5;
  }
}
