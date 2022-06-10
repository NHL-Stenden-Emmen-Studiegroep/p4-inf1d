export function AgendaItem({item}) {

return (
    <View style={styles.modalView} key={item.date}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.location}</Text>
        <Text>{item.description}</Text>
    </View>
);
}