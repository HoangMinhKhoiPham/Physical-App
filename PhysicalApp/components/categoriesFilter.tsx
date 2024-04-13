import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {FONT, SIZES} from '@/constants';

const CategoriesFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState('Featured');

    const data = [
        'Featured',
        'Hot topics',
        'Newest to Day',
    ];

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <View style={{ height: 50 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 10 }}>
                {data.map((filter, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleFilterChange(filter)}
                        style={[
                            styles.rectangle,
                            {
                                backgroundColor: selectedFilter === filter ? '#597EFF' : '#E4ECFF',
                                borderColor: selectedFilter === filter ? 'black' : 'transparent',
                                borderWidth: selectedFilter === filter ? 1 : 0,
                                shadowColor: selectedFilter === filter ? '#000' : 'transparent',
                                shadowOffset: selectedFilter === filter ? { width: 0, height: 4 } : { width: 0, height: 0 },
                                shadowOpacity: selectedFilter === filter ? 0.1 : 0,
                                shadowRadius: selectedFilter === filter ? 7 : 0,
                            },
                        ]}
                    >
                        <Text style={{ color: selectedFilter === filter ? '#FFFFFF' : '#4D506F', fontSize: SIZES.medium, fontFamily: FONT.regular, }}>{filter}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    rectangle: {
        width: 138,
        height: 35,
        marginRight: 10,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        backgroundColor: '#E4ECFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CategoriesFilter;
