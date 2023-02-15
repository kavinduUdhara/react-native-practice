import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import MenuItems from "./compo-FlatList";

const menu_items_to_display = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
    { name: 'Tabbouleh', price: '$7.00', id: '22W' },
    { name: 'Shish Tawook', price: '$13.50', id: '23X' },
    { name: 'Beef Shawarma', price: '$12.00', id: '24Y' },
    { name: 'Chicken Shawarma', price: '$10.50', id: '25Z' },
    { name: 'Honey Cake', price: '$4.00', id: '26AA' },
    { name: 'Basbousa', price: '$3.50', id: '27AB' },
    { name: 'Baklava Cheesecake', price: '$7.00', id: '28AC' },
    { name: 'Chocolate Mousse', price: '$5.50', id: '29AD' },
    { name: 'Kanafeh', price: '$6.50', id: '30AE' },
    { name: 'Turkish Delight', price: '$2.50', id: '31AF' },
    { name: 'Muhalabiya', price: '$4.50', id: '32AG' },
    { name: 'Shakshuka', price: '$8.00', id: '33AH' },
    { name: 'Labneh', price: '$4.50', id: '34AI' },
    { name: "Za'atar Bread", price: '$2.50', id: '35AJ' }
];

type itemProps = {
    name: string;
}

const Item = ({name}:itemProps) => {
    return(
    <View>
        <Text>{name}</Text>
    </View>
    );
};

type renderItemProps ={
    item: itemProps;
}

const APP = () => {
    const renderItem = ({item}:renderItemProps) => {<Item name={item.name} />};
    return(
        <view>
            <FlatList
                data={menu_items_to_display}
                keyExtractor={(item1) => item1.id}
                renderItem={({ item }) => (
                      <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <Text>{item.id}</Text>
                      </View>
                  )}
            />
        </view>
    );
};