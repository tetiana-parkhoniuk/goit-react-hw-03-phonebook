(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",formLabel:"ContactForm_formLabel__1hDC-",formInput:"ContactForm_formInput__1r2bF",submitBtn:"ContactForm_submitBtn__J-Qu6"}},,,,,,function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__2eDOn",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},,,function(t,e,n){t.exports={contactItem:"ContactsListItem_contactItem__8l6kJ",deleteBtn:"ContactsListItem_deleteBtn__1sLou"}},,function(t,e,n){t.exports={contactList:"ContactsList_contactList__-3u15"}},function(t,e,n){t.exports={container:"App_container__1MQN3"}},,,,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),i=(n(21),n(22),n(15)),s=n(3),u=n(4),l=n(7),m=n(6),b=n(25),d=n(9),h=n(5),f=n(2),p=n.n(f),j=n(0),O=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(b.a)(),t.numberInputId=Object(b.a)(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{className:p.a.formLabel,htmlFor:this.nameInputId,children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",id:this.nameInputId,value:this.state.name,className:p.a.formInput,onChange:this.handleInputChange}),Object(j.jsx)("label",{className:p.a.formLabel,htmlFor:this.nameInputId,children:"Number"}),Object(j.jsx)("input",{type:"text",name:"number",id:this.numberInputId,value:this.state.number,className:p.a.formInput,onChange:this.handleInputChange}),Object(j.jsx)("button",{type:"submit",className:p.a.submitBtn,children:"Add contact"})]})}}]),n}(a.Component),C=n(8),_=n.n(C);function v(t){var e=t.id,n=t.value,a=t.onChange;return Object(j.jsxs)("div",{className:_.a.filterContainer,children:[Object(j.jsx)("label",{className:_.a.label,htmlFor:e,children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",id:e,value:n,className:_.a.input,onChange:a})]})}var I=n(11),x=n.n(I);function g(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(j.jsxs)("li",{className:x.a.contactItem,children:[n,": ",a,Object(j.jsx)("button",{className:x.a.deleteBtn,onClick:function(){return c(e)},children:"Delete"})]})}var F=n(13),N=n.n(F);function S(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:N.a.contactList,children:e.map((function(t){return Object(j.jsx)(g,{id:t.id,name:t.name,number:t.number,onDeleteContact:n},t.id)}))})}var y=n(14),L=n.n(y),D=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.filterInputId=Object(b.a)(),t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(b.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?d.b.error("".concat(n," is already in contacts.")):""===n.trim()||""===a.trim()?d.b.error("Please enter at least some data"):t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(j.jsxs)("div",{className:L.a.container,children:[Object(j.jsx)(d.a,{position:"top-right",toastOptions:{duration:2e3}}),Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(O,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(v,{id:this.filterInputId,value:t,onChange:this.changeFilter}),Object(j.jsx)(S,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.86f856d7.chunk.js.map