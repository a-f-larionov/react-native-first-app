import React, { Component } from "react";
import { View } from "react-native";

import { List, ListItem, Header } from "react-native-elements";

let testDataSource = [
  {
    id: "8",
    parent: "0",
    name: "Уход за лицом"
  },
  {
    id: "16",
    parent: "9",
    name: "Красивая фигура"
  },
  {
    id: "29",
    parent: "8",
    name: "Антивозрастной уход"
  },
  {
    id: "31",
    parent: "17",
    name: "Ежедневный уход"
  },
  {
    id: "35",
    parent: "10",
    name: "Ежедневный уход"
  },
  {
    id: "448",
    parent: "429",
    name: "Кофе молотый"
  },
  {
    id: "341",
    parent: "15",
    name: "Для ухода за телом"
  },
  {
    id: "365",
    parent: "13",
    name: "Для будущих и кормящих мам"
  },
  {
    id: "199",
    parent: "14",
    name: "Для стирки"
  },
  {
    id: "432",
    parent: "96",
    name: "Эфирные масла"
  },
  {
    id: "429",
    parent: "20",
    name: "Чай - Кофе"
  },
  {
    id: "9",
    parent: "0",
    name: "Уход за телом"
  },
  {
    id: "19",
    parent: "10",
    name: "Для сухих и поврежденных волос"
  },
  {
    id: "22",
    parent: "9",
    name: "Ежедневный уход"
  },
  {
    id: "24",
    parent: "8",
    name: "Очищение"
  },
  {
    id: "32",
    parent: "17",
    name: "Профилактика кровоточивости и воспаления"
  },
  {
    id: "449",
    parent: "429",
    name: "Кофе растворимый"
  },
  {
    id: "202",
    parent: "14",
    name: "Для уборки дома"
  },
  {
    id: "149",
    parent: "430",
    name: "Шоколад"
  },
  {
    id: "282",
    parent: "13",
    name: "Гигиена и купание"
  },
  {
    id: "10",
    parent: "0",
    name: "Уход за волосами"
  },
  {
    id: "18",
    parent: "17",
    name: "Укрепление  десен"
  },
  {
    id: "23",
    parent: "8",
    name: "Питание и увлажнение"
  },
  {
    id: "42",
    parent: "9",
    name: "Уход за руками"
  },
  {
    id: "44",
    parent: "13",
    name: "Питание и увлажнение"
  },
  {
    id: "450",
    parent: "429",
    name: "Горячий шоколад"
  },
  {
    id: "74",
    parent: "10",
    name: "Для жирных волос"
  },
  {
    id: "198",
    parent: "14",
    name: "Для мытья посуды"
  },
  {
    id: "388",
    parent: "15",
    name: "Для ухода за лицом"
  },
  {
    id: "13",
    parent: "0",
    name: "Природа детям и мамам"
  },
  {
    id: "26",
    parent: "17",
    name: "Защита от зубного камня"
  },
  {
    id: "33",
    parent: "10",
    name: "Против выпадения"
  },
  {
    id: "41",
    parent: "9",
    name: "Уход за ногами"
  },
  {
    id: "45",
    parent: "13",
    name: "Уход за кожей"
  },
  {
    id: "150",
    parent: "429",
    name: "Чай Белый"
  },
  {
    id: "325",
    parent: "15",
    name: "Колготки"
  },
  {
    id: "96",
    parent: "20",
    name: "БАДы"
  },
  {
    id: "247",
    parent: "14",
    name: "Для мытья фруктов и овощей"
  },
  {
    id: "436",
    parent: "8",
    name: "Чувствительная кожа"
  },
  {
    id: "27",
    parent: "17",
    name: "Профилактика кариеса"
  },
  {
    id: "36",
    parent: "8",
    name: "Жирная/проблемная кожа"
  },
  {
    id: "34",
    parent: "10",
    name: "Против перхоти"
  },
  {
    id: "91",
    parent: "429",
    name: "Чай Зеленый"
  },
  {
    id: "437",
    parent: "20",
    name: "Для похудения"
  },
  {
    id: "307",
    parent: "9",
    name: "Дезодоранты"
  },
  {
    id: "246",
    parent: "13",
    name: "Уход за волосами"
  },
  {
    id: "319",
    parent: "14",
    name: "Ароматизатор воздуха"
  },
  {
    id: "17",
    parent: "0",
    name: "Фито уход за зубами"
  },
  {
    id: "82",
    parent: "17",
    name: "Отбеливание"
  },
  {
    id: "92",
    parent: "429",
    name: "Чай Черный"
  },
  {
    id: "191",
    parent: "10",
    name: "Окрашивание"
  },
  {
    id: "245",
    parent: "13",
    name: "Уход за полостью рта"
  },
  {
    id: "451",
    parent: "8",
    name: "Краска для бровей и ресниц"
  },
  {
    id: "452",
    parent: "9",
    name: "Защита от солнца"
  },
  {
    id: "20",
    parent: "0",
    name: "Био питание"
  },
  {
    id: "30",
    parent: "8",
    name: "Вокруг глаз"
  },
  {
    id: "438",
    parent: "10",
    name: "Питание и увлажнение"
  },
  {
    id: "367",
    parent: "13",
    name: "Уход за полостью носа"
  },
  {
    id: "148",
    parent: "429",
    name: "Чай Травяной"
  },
  {
    id: "324",
    parent: "9",
    name: "Ароматерапия"
  },
  {
    id: "14",
    parent: "0",
    name: "Био дом"
  },
  {
    id: "38",
    parent: "8",
    name: "Тональные средства"
  },
  {
    id: "43",
    parent: "13",
    name: "Безопасная стирка"
  },
  {
    id: "442",
    parent: "10",
    name: "Наборы"
  },
  {
    id: "415",
    parent: "9",
    name: "Питание и увлажнение"
  },
  {
    id: "15",
    parent: "0",
    name: "Био аксессуары"
  },
  {
    id: "40",
    parent: "8",
    name: "Уход за губами"
  },
  {
    id: "328",
    parent: "9",
    name: "Для мужчин"
  },
  {
    id: "434",
    parent: "9",
    name: "Наборы"
  },
  {
    id: "197",
    parent: "8",
    name: "Защита от солнца"
  },
  {
    id: "273",
    parent: "8",
    name: "Для мужчин"
  },
  {
    id: "433",
    parent: "8",
    name: "Наборы"
  },
  {
    id: "380",
    parent: "0",
    name: "Распродажа"
  },
  {
    id: "394",
    parent: "0",
    name: "Уцененные товары"
  }
];

class CategorySource {
  /* Загрузим данные, в данном случае из глобальной переменной */
  constructor() {
    this.currentId = 0;
    this.data = Array.from(testDataSource);
  }

  /* получить видимые данные */
  getShowedData() {
    return this.getListByParentId(this.currentId);
  }

  /* получить элемент по id*/
  getById(id) {
    for (let i in this.data) {
      if (this.data[i].id == id) return this.data[i];
    }
    return null;
  }

  /* получить массиво элементов по parendId*/
  getListByParentId(parentId) {
    let out = [];
    let c = 0;

    for (let i in this.data) {
      if (this.data[i].parent == parentId) {
        out.push(this.data[i]);
      }
    }
    return out;
  }

  /* уставновить текущий id, 0 - если самый верхний уровень */
  setCurrentId(id) {
    this.currentId = id;
  }

  /* имеет ли элемент детей */
  hasChilds(item) {
    return item.hasChilds === undefined
      ? (item.hasChilds = this.getListByParentId(item.id).length > 0)
      : item.hasChilds;
  }

  /* подняться на уровень выше */
  goUp() {
    this.currentId = this.getById(this.currentId).parent;
  }

  /* установить выбранный\не выбранный элемент */
  changeSelected(id) {
    let item, parent;
    item = this.getById(id);
    item.isSelected = !!!item.isSelected;
    parent = this.getById(item.parent);
    // родителя может и не быть
    if (parent) {
      parent.count = parent.count ? parent.count : 0;
      if (item.isSelected) parent.count++;
      else parent.count--;
    }

    this.onChangeSelected();
  }

  /* выбран ли элемент ?*/
  isSelected(item) {
    return !!item.isSelected;
  }

  /* получить текущий элемент, для верхнего уровня будет null*/
  getCurrent() {
    return this.getById(this.currentId);
  }

  onChangeSelected() {
    let selectedIds = [];
    for (let i in this.data) {
      if (this.data[i].isSelected) {
        selectedIds.push(this.data[i].id);
      }
    }
    // todo something here...
    console.log(selectedIds);
  }
}

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.source = new CategorySource();

    this.state = {
      parentId: 0,
      data: this.source.getShowedData()
    };
  }

  updateState() {
    this.setState({
      data: this.source.getShowedData()
    });
  }

  onBackButtonClick() {
    this.source.goUp();

    this.updateState();
  }

  onClickItem(item) {
    // если есть дети - то переходим внутрь
    if (this.source.hasChilds(item)) {
      this.source.setCurrentId(item.id);
    } else {
      this.source.changeSelected(item.id);
    }
    this.updateState();
  }

  renderRow(item) {
    return (
      <ListItem
        containerStyle={
          this.source.isSelected(item) ? { backgroundColor: "grey" } : null
        }
        key={item.id}
        title={item.name}
        badge={item.count ? { value: item.count } : null}
        hideChevron={!this.source.hasChilds(item)}
        onPress={() => {
          this.onClickItem(item);
        }}
        underlayColor={"#888"}
      />
    );
  }

  render() {
    let item, headerText;
    headerText = "Категории";

    item = this.source.getCurrent();
    if (item) {
      headerText = item.name;
    }

    return (
      <View>
        <Header
          leftComponent={
            item
              ? {
                  icon: "chevron-left",
                  color: "black",
                  onPress: () => {
                    this.onBackButtonClick();
                  }
                }
              : null
          }
          centerComponent={{ text: headerText, style: { color: "black" } }}
          outerContainerStyles={{ backgroundColor: null }}
        />
        <List containerStyle={{ marginTop: 0 }}>
          {this.state.data.map(item => {
            return this.renderRow(item);
          })}
        </List>
      </View>
    );
  }
}

class CategoryListApp extends Component {
  render() {
    return (
      <View>
        <CategoryList />
      </View>
    );
  }
}

export default CategoryListApp;
