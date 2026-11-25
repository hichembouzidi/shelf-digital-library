import React, { useMemo, useState } from "react";
import { SafeAreaView, StatusBar, View, Text, TextInput, ScrollView, Image, Pressable, StyleSheet } from "react-native";
import { seedItems, collectionLabels, type Collection } from "@library/shared";

const purple = "#6258e8";
export default function App() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | Collection>("all");
  const [selected, setSelected] = useState<string | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const [arabic, setArabic] = useState(false);
  const visible = useMemo(() => seedItems.filter(item => {
    const okCollection = filter === "all" || item.collection === filter;
    return okCollection && `${item.title} ${item.author} ${item.category}`.toLowerCase().includes(query.toLowerCase());
  }), [filter, query]);
  const item = seedItems.find(x => x.id === selected);
  return <SafeAreaView style={s.safe}>
    <StatusBar barStyle="light-content" backgroundColor="#171b35"/>
    <View style={s.header}>
      <View><Text style={s.brand}>Shelf<Text style={{color:"#b8b2ff"}}>.</Text></Text><Text style={s.tagline}>YOUR DIGITAL LIBRARY</Text></View>
      <Pressable onPress={()=>setArabic(!arabic)} style={s.lang}><Text style={s.langText}>{arabic ? "EN" : "عربي"}</Text></Pressable>
    </View>
    {item ? <ScrollView contentContainerStyle={s.detail}>
      <Pressable onPress={()=>setSelected(null)}><Text style={s.back}>‹  Back to library</Text></Pressable>
      <Image source={{uri:item.cover}} style={s.detailCover}/>
      <Text style={s.category}>{item.category}</Text><Text style={s.detailTitle}>{arabic ? item.titleAr : item.title}</Text>
      <Text style={s.author}>by {item.author}</Text><Text style={s.description}>{arabic ? item.descriptionAr : item.description}</Text>
      <Text style={s.meta}>{item.pages} pages  ·  {item.language}  ·  {item.year}</Text>
      <Pressable style={s.primary} onPress={()=>setSaved(old=>old.includes(item.id)?old.filter(x=>x!==item.id):[...old,item.id])}><Text style={s.primaryText}>{saved.includes(item.id)?"Saved ✓":"♡  Save to my shelf"}</Text></Pressable>
      <Text style={s.note}>PDF reading is a placeholder in this demo app. Add a licensed PDF and a reader component to enable it.</Text>
    </ScrollView> : <ScrollView contentContainerStyle={s.content}>
      <View style={s.hero}><Text style={s.eyebrow}>A LIBRARY IN YOUR POCKET</Text><Text style={s.heroTitle}>Find your next{ "\n" }great read.</Text><Text style={s.heroCopy}>Books, stories, manga and more — all in one place.</Text></View>
      <TextInput value={query} onChangeText={setQuery} placeholder="Search titles or authors..." placeholderTextColor="#9298aa" style={s.search}/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.filters}>
        {[{id:"all",label:"All"},{id:"scientific",label:"Scientific"},{id:"stories",label:"Stories"},{id:"comics",label:"Comics"}].map(f=><Pressable key={f.id} onPress={()=>setFilter(f.id as any)} style={[s.chip,filter===f.id&&s.chipActive]}><Text style={[s.chipText,filter===f.id&&s.chipTextActive]}>{f.label}</Text></Pressable>)}
      </ScrollView>
      <View style={s.sectionHead}><Text style={s.sectionTitle}>Explore the library</Text><Text style={s.count}>{visible.length} titles</Text></View>
      {visible.map(book=><Pressable key={book.id} onPress={()=>setSelected(book.id)} style={s.card}>
        <Image source={{uri:book.cover}} style={s.cover}/>
        <View style={s.cardBody}><Text style={s.category}>{book.category}</Text><Text style={s.bookTitle} numberOfLines={2}>{arabic?book.titleAr:book.title}</Text><Text style={s.author}>{book.author}</Text><Text style={s.meta}>{book.pages} pages · {book.year}</Text></View>
        <Text style={s.chevron}>›</Text>
      </Pressable>)}
      <Text style={s.footer}>SHELF · PORTFOLIO DEMO</Text>
    </ScrollView>}
  </SafeAreaView>;
}
const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:"#f7f7fb"},header:{backgroundColor:"#171b35",paddingHorizontal:22,paddingVertical:17,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},
  brand:{color:"white",fontSize:25,fontWeight:"900",letterSpacing:-1},tagline:{color:"#aeb2c8",fontSize:9,fontWeight:"800",letterSpacing:2,marginTop:2},
  lang:{borderColor:"#ffffff44",borderWidth:1,borderRadius:10,paddingHorizontal:13,paddingVertical:8},langText:{color:"white",fontWeight:"700"},
  content:{padding:18,paddingBottom:40},hero:{backgroundColor:"#202447",borderRadius:23,padding:24,marginBottom:17},eyebrow:{color:"#b8b2ff",fontSize:10,fontWeight:"900",letterSpacing:1.6},heroTitle:{color:"white",fontSize:37,fontWeight:"900",lineHeight:41,marginTop:12},heroCopy:{color:"#c9cbe0",fontSize:13,lineHeight:20,marginTop:10},
  search:{backgroundColor:"white",borderRadius:13,paddingHorizontal:16,paddingVertical:14,fontSize:14,borderColor:"#e7e8ef",borderWidth:1},filters:{marginTop:17,marginBottom:20,flexGrow:0},chip:{backgroundColor:"white",paddingHorizontal:16,paddingVertical:10,borderRadius:30,marginRight:8},chipActive:{backgroundColor:"#202447"},chipText:{color:"#586078",fontWeight:"700",fontSize:12},chipTextActive:{color:"white"},
  sectionHead:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginBottom:13},sectionTitle:{fontSize:20,fontWeight:"900",color:"#172033"},count:{fontSize:11,color:"#858b9c"},
  card:{backgroundColor:"white",borderRadius:16,padding:10,flexDirection:"row",alignItems:"center",marginBottom:11,borderWidth:1,borderColor:"#eff0f5"},cover:{width:75,height:100,borderRadius:9,backgroundColor:"#e5e7eb"},cardBody:{flex:1,paddingHorizontal:13},category:{fontSize:9,fontWeight:"900",color:purple,textTransform:"uppercase",letterSpacing:.7},bookTitle:{fontSize:15,fontWeight:"900",color:"#172033",marginTop:5},author:{fontSize:11,color:"#737b8e",marginTop:5},meta:{fontSize:10,color:"#9aa0ae",marginTop:7},chevron:{fontSize:25,color:"#a3a8b5",paddingHorizontal:5},footer:{textAlign:"center",fontSize:9,color:"#a2a7b4",letterSpacing:2,marginTop:20},
  detail:{padding:22,alignItems:"flex-start"},back:{fontSize:14,color:purple,fontWeight:"700",marginBottom:22},detailCover:{width:190,height:260,borderRadius:16,alignSelf:"center",marginBottom:25},detailTitle:{fontSize:29,fontWeight:"900",color:"#172033",marginTop:7},description:{fontSize:14,lineHeight:23,color:"#626b7d",marginTop:20},meta:{fontSize:11,color:"#9298a7",marginTop:15},primary:{backgroundColor:purple,paddingVertical:14,paddingHorizontal:20,borderRadius:12,marginTop:20,alignSelf:"stretch",alignItems:"center"},primaryText:{color:"white",fontWeight:"800"},note:{fontSize:11,color:"#8a91a1",lineHeight:18,marginTop:16}
});
