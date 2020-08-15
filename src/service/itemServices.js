class ItemServices {
  items = [];

  constructor(items) {
    this.items = items;
  }

  store(item) {
    const findItem = this.items.find((item) => item.id === this.items.id);
    if (findItem) return alert('Already exist a item with this id');
    return this.items === null ? (this.items = [item]) : (this.items = [...this.items, item]);
  }

  index(items) {
    items = this.items;
    return items;
  }

  remove(itemId) {
    this.items.splice(itemId, 1);
  }
}

export default ItemServices;
