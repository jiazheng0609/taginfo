(function(a){a.addFlex=function(r,v){if(r.grid){return false}v=a.extend({height:200,width:"auto",striped:true,novstripe:false,minwidth:30,minheight:80,resizable:true,url:false,method:"POST",dataType:"xml",errormsg:"Connection Error",usepager:false,nowrap:true,page:1,total:1,useRp:true,rp:15,rpOptions:[10,15,20,25,40],title:false,pagestat:"Displaying {from} to {to} of {total} items",pagetext:"Page",outof:"of",findtext:"Find",procmsg:"Processing, please wait ...",query:"",qtype:"",nomsg:"No items",minColToggle:1,showToggleBtn:true,hideOnSubmit:true,autoload:true,blockOpacity:0.5,onDragCol:false,onToggleCol:false,onChangeSort:false,onSuccess:false,onError:false,onSubmit:false},v);a(r).show().attr({cellPadding:0,cellSpacing:0,border:0}).removeAttr("width");var z={hset:{},rePosDrag:function(){var i=0-this.hDiv.scrollLeft;if(this.hDiv.scrollLeft>0){i-=Math.floor(v.cgwidth/2)}a(z.cDrag).css({top:z.hDiv.offsetTop+1});var g=this.cdpad;a("div",z.cDrag).hide();a("thead tr:first th:visible",this.hDiv).each(function(){var s=a("thead tr:first th:visible",z.hDiv).index(this),p=parseInt(a("div",this).width());if(i==0){i-=Math.floor(v.cgwidth/2)}p=p+i+g;a("div:eq("+s+")",z.cDrag).css({left:p+"px"}).show();i=p})},fixHeight:function(i){i=false;if(!i){i=a(z.bDiv).height()}var s=a(this.hDiv).height();a("div",this.cDrag).each(function(){a(this).height(i+s)});var p=parseInt(a(z.nDiv).height());if(p>i){a(z.nDiv).height(i).width(200)}else{a(z.nDiv).height("auto").width("auto")}a(z.block).css({height:i,marginBottom:(i*-1)});var g=z.bDiv.offsetTop+i;if(v.height!="auto"&&v.resizable){g=z.vDiv.offsetTop}a(z.rDiv).css({height:g})},dragStart:function(t,s,p){if(t=="colresize"){a(z.nDiv).hide();a(z.nBtn).hide();var F=a("div",this.cDrag).index(p),g=a("th:visible div:eq("+F+")",this.hDiv).width();a(p).addClass("dragging").siblings().hide();a(p).prev().addClass("dragging").show();this.colresize={startX:s.pageX,ol:parseInt(p.style.left),ow:g,n:F};a("body").css("cursor","col-resize")}else{if(t=="vresize"){var i=false;a("body").css("cursor","row-resize");if(p){i=true;a("body").css("cursor","col-resize")}this.vresize={h:v.height,sy:s.pageY,w:v.width,sx:s.pageX,hgo:i}}else{if(t=="colMove"){a(z.nDiv).hide();a(z.nBtn).hide();this.hset=a(this.hDiv).offset();this.hset.right=this.hset.left+a("table",this.hDiv).width();this.hset.bottom=this.hset.top+a("table",this.hDiv).height();this.dcol=p;this.dcoln=a("th",this.hDiv).index(p);this.colCopy=document.createElement("div");this.colCopy.className="colCopy";this.colCopy.innerHTML=p.innerHTML;if(a.browser.msie){this.colCopy.className="colCopy ie"}a(this.colCopy).css({position:"absolute","float":"left",display:"none",textAlign:p.align});a("body").append(this.colCopy);a(this.cDrag).hide()}}}a("body").noSelect()},dragMove:function(t){if(this.colresize){var i=this.colresize.n,J=t.pageX-this.colresize.startX,F=this.colresize.ol+J,s=this.colresize.ow+J;if(s>v.minwidth){a("div:eq("+i+")",this.cDrag).css("left",F);this.colresize.nw=s}}else{if(this.vresize){var K=this.vresize,H=t.pageY,J=H-K.sy;if(!v.defwidth){v.defwidth=v.width}if(v.width!="auto"&&!v.nohresize&&K.hgo){var I=t.pageX,p=I-K.sx,g=K.w+p;if(g>v.defwidth){this.gDiv.style.width=g+"px";v.width=g}}var G=K.h+J;if((G>v.minheight||v.height<v.minheight)&&!K.hgo){this.bDiv.style.height=G+"px";v.height=G;this.fixHeight(G)}K=null}else{if(this.colCopy){a(this.dcol).addClass("thMove").removeClass("thOver");if(t.pageX>this.hset.right||t.pageX<this.hset.left||t.pageY>this.hset.bottom||t.pageY<this.hset.top){a("body").css("cursor","move")}else{a("body").css("cursor","pointer")}a(this.colCopy).css({top:t.pageY+10,left:t.pageX+20,display:"block"})}}}},dragEnd:function(){if(this.colresize){var i=this.colresize.n,g=this.colresize.nw;a("th:visible div:eq("+i+")",this.hDiv).css("width",g);a("tr",this.bDiv).each(function(){a("td:visible div:eq("+i+")",this).css("width",g)});this.hDiv.scrollLeft=this.bDiv.scrollLeft;a("div:eq("+i+")",this.cDrag).siblings().show();a(".dragging",this.cDrag).removeClass("dragging");this.rePosDrag();this.fixHeight();this.colresize=false}else{if(this.vresize){this.vresize=false}else{if(this.colCopy){a(this.colCopy).remove();if(this.dcolt!=null){if(this.dcoln>this.dcolt){a("th:eq("+this.dcolt+")",this.hDiv).before(this.dcol)}else{a("th:eq("+this.dcolt+")",this.hDiv).after(this.dcol)}this.switchCol(this.dcoln,this.dcolt);a(this.cdropleft).remove();a(this.cdropright).remove();this.rePosDrag();if(v.onDragCol){v.onDragCol(this.dcoln,this.dcolt)}}this.dcol=null;this.hset=null;this.dcoln=null;this.dcolt=null;this.colCopy=null;a(".thMove",this.hDiv).removeClass("thMove");a(this.cDrag).show()}}}a("body").css("cursor","default");a("body").noSelect(false)},toggleCol:function(t,p){var i=a("th[axis='col"+t+"']",this.hDiv)[0],s=a("thead th",z.hDiv).index(i),g=a("input[value="+t+"]",z.nDiv)[0];if(p==null){p=i.hide}if(a("input:checked",z.nDiv).length<v.minColToggle&&!p){return false}if(p){i.hide=false;a(i).show();g.checked=true}else{i.hide=true;a(i).hide();g.checked=false}a("tbody tr",r).each(function(){if(p){a("td:eq("+s+")",this).show()}else{a("td:eq("+s+")",this).hide()}});this.rePosDrag();if(v.onToggleCol){v.onToggleCol(t,p)}return p},switchCol:function(i,g){a("tbody tr",r).each(function(){if(i>g){a("td:eq("+g+")",this).before(a("td:eq("+i+")",this))}else{a("td:eq("+g+")",this).after(a("td:eq("+i+")",this))}});if(i>g){a("tr:eq("+g+")",this.nDiv).before(a("tr:eq("+i+")",this.nDiv))}else{a("tr:eq("+g+")",this.nDiv).after(a("tr:eq("+i+")",this.nDiv))}if(a.browser.msie&&a.browser.version<7){a("tr:eq("+g+") input",this.nDiv)[0].checked=true}this.hDiv.scrollLeft=this.bDiv.scrollLeft},scroll:function(){this.hDiv.scrollLeft=this.bDiv.scrollLeft;this.rePosDrag()},addData:function(s){if(v.preProcess){s=v.preProcess(s)}if(this.pDiv){this.domElements.pReload.removeClass("loading")}this.loading=false;if(!s){if(this.pDiv){this.domElements.pPageStat.html(v.errormsg)}return false}if(v.dataType=="xml"){v.total=+a("rows total",s).text()}else{v.total=s.total}if(v.total==0){a("tr, a, td, div",r).unbind();a(r).empty();v.pages=1;v.page=1;this.buildpager();if(this.pDiv){this.domElements.pPageStat.html(v.nomsg)}return false}v.pages=Math.ceil(v.total/v.rp);if(v.dataType=="xml"){v.page=+a("rows page",s).text()}else{v.page=s.page}this.buildpager();var g=document.createElement("tbody");if(v.dataType=="json"){a.each(s.rows,function(F,H){var G=document.createElement("tr");if(F%2&&v.striped){G.className="erow"}if(H.id){G.id="row"+H.id}a("thead tr:first th",z.hDiv).each(function(){var J=document.createElement("td"),i=a(this).attr("axis").substr(3);J.align=this.align;J.innerHTML=H.cell[i];a(G).append(J);J=null});if(a("thead",this.gDiv).length<1){for(var t=0;t<cell.length;t++){var I=document.createElement("td");I.innerHTML=H.cell[t];a(G).append(I);I=null}}a(g).append(G);G=null})}else{if(v.dataType=="xml"){var p=1;a("rows row",s).each(function(){p++;var t=document.createElement("tr");if(p%2&&v.striped){t.className="erow"}var F=a(this).attr("id");if(F){t.id="row"+F}F=null;var i=this;a("thead tr:first th",z.hDiv).each(function(){var H=document.createElement("td"),G=a(this).attr("axis").substr(3);H.align=this.align;H.innerHTML=a("cell:eq("+G+")",i).text();a(t).append(H);H=null});if(a("thead",this.gDiv).length<1){a("cell",this).each(function(){var G=document.createElement("td");G.innerHTML=a(this).text();a(t).append(G);G=null})}a(g).append(t);t=null;i=null})}}a("tr",r).unbind();a(r).empty();a(r).append(g);this.addCellProp();this.addRowProp();this.rePosDrag();g=null;s=null;p=null;if(v.onSuccess){v.onSuccess()}if(v.hideOnSubmit){a(z.block).remove()}this.hDiv.scrollLeft=this.bDiv.scrollLeft;if(a.browser.opera){a(r).css("visibility","visible")}},changeSort:function(g){if(this.loading){return true}a(z.nDiv).hide();a(z.nBtn).hide();if(v.sortname==a(g).attr("abbr")){if(v.sortorder=="asc"){v.sortorder="desc"}else{v.sortorder="asc"}}a(g).addClass("sorted").siblings().removeClass("sorted");a(".sdesc",this.hDiv).removeClass("sdesc");a(".sasc",this.hDiv).removeClass("sasc");a("div",g).addClass("s"+v.sortorder);v.sortname=a(g).attr("abbr");if(v.onChangeSort){v.onChangeSort(v.sortname,v.sortorder)}else{this.populate()}},buildpager:function(){if(this.pDiv){this.domElements.pcontrol_input.val(v.page);this.domElements.pcontrol_span.html(v.pages)}var i=(v.page-1)*v.rp+1,g=i+v.rp-1;if(v.total<g){g=v.total}var p=v.pagestat;p=p.replace(/{from}/,i);p=p.replace(/{to}/,g);p=p.replace(/{total}/,v.total);if(this.pDiv){this.domElements.pPageStat.html(p)}},populate:function(){if(this.loading){return true}if(v.onSubmit){var g=v.onSubmit();if(!g){return false}}this.loading=true;if(!v.url){return false}if(this.pDiv){this.domElements.pPageStat.html(v.procmsg);this.domElements.pReload.addClass("loading")}a(z.block).css({top:z.bDiv.offsetTop});if(v.hideOnSubmit){a(this.gDiv).prepend(z.block)}if(a.browser.opera){a(r).css("visibility","hidden")}if(!v.newp){v.newp=1}if(v.page>v.pages){v.page=v.pages}var p=[{name:"page",value:v.newp},{name:"rp",value:v.rp},{name:"sortname",value:v.sortname},{name:"sortorder",value:v.sortorder},{name:"query",value:v.query},{name:"qtype",value:v.qtype}];if(v.params){for(var i=0;i<v.params.length;i++){p[p.length]=v.params[i]}}a.ajax({type:v.method,url:v.url,data:p,dataType:v.dataType,success:function(s){z.addData(s)},error:function(s,G,F){try{if(v.onError){v.onError(s,G,F)}}catch(t){}}})},doSearch:function(){v.query=a("input[name=q]",z.sDiv).val();v.qtype=a("select[name=qtype]",z.sDiv).val();v.newp=1;this.populate()},changePage:function(i){if(this.loading){return true}switch(i){case"first":v.newp=1;break;case"prev":if(v.page>1){v.newp=parseInt(v.page)-1}break;case"next":if(v.page<v.pages){v.newp=parseInt(v.page)+1}break;case"last":v.newp=v.pages;break;case"input":if(this.pDiv){var g=parseInt(this.domElements.pcontrol_input.val());if(isNaN(g)){g=1}if(g<1){g=1}else{if(g>v.pages){g=v.pages}}this.domElements.pcontrol_input.val(g);v.newp=g;break}}if(v.newp==v.page){return false}if(v.onChangePage){v.onChangePage(v.newp)}else{this.populate()}},addCellProp:function(){a("tbody tr td",z.bDiv).each(function(){var p=document.createElement("div"),t=a("td",a(this).parent()).index(this),s=a("th:eq("+t+")",z.hDiv).get(0);if(s!=null){if(v.sortname==a(s).attr("abbr")&&v.sortname){this.className="sorted"}a(p).css({textAlign:s.align,width:a("div:first",s)[0].style.width});if(s.hide){a(this).css("display","none")}}if(v.nowrap==false){a(p).css("white-space","normal")}if(this.innerHTML==""){this.innerHTML="&nbsp;"}p.innerHTML=this.innerHTML;var i=a(this).parent()[0],g=false;if(i.id){g=i.id.substr(3)}if(s!=null){if(s.process){s.process(p,g)}}a(this).empty().append(p).removeAttr("width")})},getCellDim:function(p){var G=parseInt(a(p).height()),g=parseInt(a(p).parent().height()),t=parseInt(p.style.width),I=parseInt(a(p).parent().width()),F=p.offsetParent.offsetTop,i=p.offsetParent.offsetLeft,H=parseInt(a(p).css("paddingLeft")),s=parseInt(a(p).css("paddingTop"));return{ht:G,wt:t,top:F,left:i,pdl:H,pdt:s,pht:g,pwt:I}},addRowProp:function(){a("tbody tr",z.bDiv).each(function(){a(this).click(function(i){var g=(i.target||i.srcElement);if(g.href||g.type){return true}a(this).toggleClass("trSelected");if(v.singleSelect){a(this).siblings().removeClass("trSelected")}}).mousedown(function(g){if(g.shiftKey){a(this).toggleClass("trSelected");z.multisel=true;this.focus();a(z.gDiv).noSelect()}}).mouseup(function(){if(z.multisel){z.multisel=false;a(z.gDiv).noSelect(false)}}).hover(function(g){if(z.multisel){a(this).toggleClass("trSelected")}},function(){});if(a.browser.msie&&a.browser.version<7){a(this).hover(function(){a(this).addClass("trOver")},function(){a(this).removeClass("trOver")})}})},pager:0};if(v.colModel){var A=document.createElement("thead");var c=document.createElement("tr");for(var x=0;x<v.colModel.length;x++){var n=v.colModel[x],k=document.createElement("th");k.innerHTML=n.display;if(n.name&&n.sortable){a(k).attr("abbr",n.name)}a(k).attr("axis","col"+x);if(n.align){k.align=n.align}if(n.width){a(k).attr("width",n.width)}if(n.hide){k.hide=true}if(n.process){k.process=n.process}a(c).append(k)}a(A).append(c);a(r).prepend(A)}z.gDiv=document.createElement("div");z.mDiv=document.createElement("div");z.hDiv=document.createElement("div");z.bDiv=document.createElement("div");z.vDiv=document.createElement("div");z.rDiv=document.createElement("div");z.cDrag=document.createElement("div");z.block=document.createElement("div");z.nDiv=document.createElement("div");z.nBtn=document.createElement("div");z.iDiv=document.createElement("div");z.tDiv=document.createElement("div");z.sDiv=document.createElement("div");if(v.usepager){z.pDiv=document.createElement("div")}z.hTable=document.createElement("table");z.gDiv.className="flexigrid";if(v.width!="auto"){z.gDiv.style.width=v.width+"px"}if(a.browser.msie){a(z.gDiv).addClass("ie")}if(v.novstripe){a(z.gDiv).addClass("novstripe")}a(r).before(z.gDiv);a(z.gDiv).append(r);if(v.buttons){z.tDiv.className="tDiv";var D=document.createElement("div");D.className="tDiv2";for(x=0;x<v.buttons.length;x++){var m=v.buttons[x];if(!m.separator){var y=document.createElement("div");y.className="fbutton";y.innerHTML="<div><span>"+m.name+"</span></div>";if(m.bclass){a("span",y).addClass(m.bclass).css({paddingLeft:20})}y.onpress=m.onpress;y.name=m.name;if(m.onpress){a(y).click(function(){this.onpress(this.name,z.gDiv)})}a(D).append(y);if(a.browser.msie&&a.browser.version<7){a(y).hover(function(){a(this).addClass("fbOver")},function(){a(this).removeClass("fbOver")})}}else{a(D).append("<div class='btnseparator'></div>")}}a(z.tDiv).append(D);a(z.tDiv).append("<div style='clear:both'></div>");a(z.gDiv).prepend(z.tDiv)}z.hDiv.className="hDiv";a(r).before(z.hDiv);z.hTable.cellPadding=0;z.hTable.cellSpacing=0;a(z.hDiv).append('<div class="hDivBox"></div>');a("div",z.hDiv).append(z.hTable);var A=a("thead:first",r).get(0);if(A){a(z.hTable).append(A)}A=null;if(!v.colmodel){var o=0}a("thead tr:first th",z.hDiv).each(function(){var g=document.createElement("div");if(a(this).attr("abbr")){a(this).click(function(p){if(!a(this).hasClass("thOver")){return false}var i=(p.target||p.srcElement);if(i.href||i.type){return true}z.changeSort(this)});if(a(this).attr("abbr")==v.sortname){this.className="sorted";g.className="s"+v.sortorder}}if(this.hide){a(this).hide()}if(!v.colmodel){a(this).attr("axis","col"+o++)}a(g).css({textAlign:this.align,width:this.width+"px"});g.innerHTML=this.innerHTML;a(this).empty().append(g).removeAttr("width").mousedown(function(i){z.dragStart("colMove",i,this)}).hover(function(){if(!z.colresize&&!a(this).hasClass("thMove")&&!z.colCopy){a(this).addClass("thOver")}if(a(this).attr("abbr")!=v.sortname&&!z.colCopy&&!z.colresize&&a(this).attr("abbr")){a("div",this).addClass("s"+v.sortorder)}else{if(a(this).attr("abbr")==v.sortname&&!z.colCopy&&!z.colresize&&a(this).attr("abbr")){var G="";if(v.sortorder=="asc"){G="desc"}else{G="asc"}a("div",this).removeClass("s"+v.sortorder).addClass("s"+G)}}if(z.colCopy){var H=a("th",z.hDiv).index(this);if(H==z.dcoln){return false}if(H<z.dcoln){a(this).append(z.cdropleft)}else{a(this).append(z.cdropright)}z.dcolt=H}else{if(!z.colresize){var s=a("th:visible",z.hDiv).index(this),F=parseInt(a("div:eq("+s+")",z.cDrag).css("left")),p=jQuery(z.nBtn).outerWidth(),i=F-p+Math.floor(v.cgwidth/2);a(z.nDiv).hide();a(z.nBtn).hide();a(z.nBtn).css({left:i,top:z.hDiv.offsetTop}).show();var t=parseInt(a(z.nDiv).width());a(z.nDiv).css({top:z.bDiv.offsetTop});if((i+t)>a(z.gDiv).width()){a(z.nDiv).css("left",F-t+1)}else{a(z.nDiv).css("left",i)}if(a(this).hasClass("sorted")){a(z.nBtn).addClass("srtd")}else{a(z.nBtn).removeClass("srtd")}}}},function(){a(this).removeClass("thOver");if(a(this).attr("abbr")!=v.sortname){a("div",this).removeClass("s"+v.sortorder)}else{if(a(this).attr("abbr")==v.sortname){var i="";if(v.sortorder=="asc"){i="desc"}else{i="asc"}a("div",this).addClass("s"+v.sortorder).removeClass("s"+i)}}if(z.colCopy){a(z.cdropleft).remove();a(z.cdropright).remove();z.dcolt=null}})});z.bDiv.className="bDiv";a(r).before(z.bDiv);a(z.bDiv).css({height:(v.height=="auto")?"auto":v.height+"px"}).scroll(function(g){z.scroll()}).append(r);if(v.height=="auto"){a("table",z.bDiv).addClass("autoht")}z.addCellProp();z.addRowProp();var j=a("thead tr:first th:first",z.hDiv).get(0);if(j!=null){z.cDrag.className="cDrag";z.cdpad=0;z.cdpad+=(isNaN(parseInt(a("div",j).css("borderLeftWidth")))?0:parseInt(a("div",j).css("borderLeftWidth")));z.cdpad+=(isNaN(parseInt(a("div",j).css("borderRightWidth")))?0:parseInt(a("div",j).css("borderRightWidth")));z.cdpad+=(isNaN(parseInt(a("div",j).css("paddingLeft")))?0:parseInt(a("div",j).css("paddingLeft")));z.cdpad+=(isNaN(parseInt(a("div",j).css("paddingRight")))?0:parseInt(a("div",j).css("paddingRight")));z.cdpad+=(isNaN(parseInt(a(j).css("borderLeftWidth")))?0:parseInt(a(j).css("borderLeftWidth")));z.cdpad+=(isNaN(parseInt(a(j).css("borderRightWidth")))?0:parseInt(a(j).css("borderRightWidth")));z.cdpad+=(isNaN(parseInt(a(j).css("paddingLeft")))?0:parseInt(a(j).css("paddingLeft")));z.cdpad+=(isNaN(parseInt(a(j).css("paddingRight")))?0:parseInt(a(j).css("paddingRight")));a(z.bDiv).before(z.cDrag);var e=a(z.bDiv).height(),d=a(z.hDiv).height();a(z.cDrag).css({top:-d+"px"});a("thead tr:first th",z.hDiv).each(function(){var g=document.createElement("div");a(z.cDrag).append(g);if(!v.cgwidth){v.cgwidth=a(g).width()}a(g).css({height:e+d}).mousedown(function(i){z.dragStart("colresize",i,this)});if(a.browser.msie&&a.browser.version<7){z.fixHeight(a(z.gDiv).height());a(g).hover(function(){z.fixHeight();a(this).addClass("dragging")},function(){if(!z.colresize){a(this).removeClass("dragging")}})}})}if(v.striped){a("tbody tr:odd",z.bDiv).addClass("erow")}if(v.resizable&&v.height!="auto"){z.vDiv.className="vGrip";a(z.vDiv).mousedown(function(g){z.dragStart("vresize",g)}).html("<span></span>");a(z.bDiv).after(z.vDiv)}if(v.resizable&&v.width!="auto"&&!v.nohresize){z.rDiv.className="hGrip";a(z.rDiv).mousedown(function(g){z.dragStart("vresize",g,true)}).html("<span></span>").css("height",a(z.gDiv).height());if(a.browser.msie&&a.browser.version<7){a(z.rDiv).hover(function(){a(this).addClass("hgOver")},function(){a(this).removeClass("hgOver")})}a(z.gDiv).append(z.rDiv)}if(v.usepager){z.pDiv.className="pDiv";z.pDiv.innerHTML='<div class="pDiv2"></div>';a(z.bDiv).after(z.pDiv);var q=' <div class="pGroup"> <div class="pFirst pButton"><span></span></div><div class="pPrev pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"><span class="pcontrol">'+v.pagetext+' <input type="text" size="4" value="1" /> '+v.outof+' <span> 1 </span></span></div> <div class="btnseparator"></div> <div class="pGroup"> <div class="pNext pButton"><span></span></div><div class="pLast pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"> <div class="pReload pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"><span class="pPageStat"></span></div>';a("div",z.pDiv).html(q);z.domElements={pReload:a(".pReload",z.pDiv),pPageStat:a(".pPageStat",z.pDiv),pcontrol_input:a(".pcontrol input",z.pDiv),pcontrol_span:a(".pcontrol span",z.pDiv)};z.domElements.pReload.click(function(){z.populate()});a(".pFirst",z.pDiv).click(function(){z.changePage("first")});a(".pPrev",z.pDiv).click(function(){z.changePage("prev")});a(".pNext",z.pDiv).click(function(){z.changePage("next")});a(".pLast",z.pDiv).click(function(){z.changePage("last")});z.domElements.pcontrol_input.keydown(function(g){if(g.keyCode==13){z.changePage("input")}});if(a.browser.msie&&a.browser.version<7){a(".pButton",z.pDiv).hover(function(){a(this).addClass("pBtnOver")},function(){a(this).removeClass("pBtnOver")})}if(v.useRp){var f="";for(var C=0;C<v.rpOptions.length;C++){var w="";if(v.rp==v.rpOptions[C]){w='selected="selected"'}f+="<option value='"+v.rpOptions[C]+"' "+w+" >"+v.rpOptions[C]+"&nbsp;&nbsp;</option>"}a(".pDiv2",z.pDiv).prepend("<div class='pGroup'><select name='rp'>"+f+"</select></div> <div class='btnseparator'></div>");a("select",z.pDiv).change(function(){if(v.onRpChange){v.onRpChange(+this.value)}else{v.newp=1;v.rp=+this.value;z.populate()}})}if(v.searchitems){a(".pDiv2",z.pDiv).prepend("<div class='pGroup'> <div class='pSearch pButton'><span></span></div> </div>  <div class='btnseparator'></div>");a(".pSearch",z.pDiv).click(function(){a(z.sDiv).slideToggle("fast",function(){a(".sDiv:visible input:first",z.gDiv).trigger("focus")})});z.sDiv.className="sDiv";sitems=v.searchitems;var h="";for(var u=0;u<sitems.length;u++){if(v.qtype==""&&sitems[u].isdefault==true){v.qtype=sitems[u].name;w='selected="selected"'}else{w=""}h+="<option value='"+sitems[u].name+"' "+w+" >"+sitems[u].display+"&nbsp;&nbsp;</option>"}if(v.qtype==""){v.qtype=sitems[0].name}a(z.sDiv).append("<div class='sDiv2'>"+v.findtext+" <input type='text' size='30' name='q' class='qsbox' /> <select name='qtype'>"+h+"</select> <!--input type='button' value='Clear' /--></div>");a("input[name=q],select[name=qtype]",z.sDiv).keydown(function(g){if(g.keyCode==13){z.doSearch()}});a("input[value=Clear]",z.sDiv).click(function(){a("input[name=q]",z.sDiv).val("");v.query="";z.doSearch()});a(z.bDiv).after(z.sDiv)}}a(z.pDiv,z.sDiv).append("<div style='clear:both'></div>");if(v.title){z.mDiv.className="mDiv";z.mDiv.innerHTML='<div class="ftitle">'+v.title+"</div>";a(z.gDiv).prepend(z.mDiv);if(v.showTableToggleBtn){a(z.mDiv).append('<div class="ptogtitle" title="Minimize/Maximize Table"><span></span></div>');a("div.ptogtitle",z.mDiv).click(function(){a(z.gDiv).toggleClass("hideBody");a(this).toggleClass("vsble")})}}z.cdropleft=document.createElement("span");z.cdropleft.className="cdropleft";z.cdropright=document.createElement("span");z.cdropright.className="cdropright";z.block.className="gBlock";var B=a(z.bDiv).height(),E=z.bDiv.offsetTop;a(z.block).css({width:z.bDiv.style.width,height:B,background:"white",position:"relative",marginBottom:(B*-1),zIndex:1,top:E,left:"0px"});a(z.block).fadeTo(0,v.blockOpacity);if(a("th",z.hDiv).length){z.nDiv.className="nDiv";z.nDiv.innerHTML="<table cellpadding='0' cellspacing='0'><tbody></tbody></table>";a(z.nDiv).css({marginBottom:(B*-1),display:"none",top:E}).noSelect();var l=0;a("th div",z.hDiv).each(function(){var i=a("th[axis='col"+l+"']",z.hDiv)[0],g='checked="checked"';if(i.style.display=="none"){g=""}a("tbody",z.nDiv).append('<tr><td class="ndcol1"><input type="checkbox" '+g+' class="togCol" value="'+l+'" /></td><td class="ndcol2">'+this.innerHTML+"</td></tr>");l++});if(a.browser.msie&&a.browser.version<7){a("tr",z.nDiv).hover(function(){a(this).addClass("ndcolover")},function(){a(this).removeClass("ndcolover")})}a("td.ndcol2",z.nDiv).click(function(){if(a("input:checked",z.nDiv).length<=v.minColToggle&&a(this).prev().find("input")[0].checked){return false}return z.toggleCol(a(this).prev().find("input").val())});a("input.togCol",z.nDiv).click(function(){if(a("input:checked",z.nDiv).length<v.minColToggle&&this.checked==false){return false}a(this).parent().next().trigger("click")});a(z.gDiv).prepend(z.nDiv);a(z.nBtn).addClass("nBtn").html("<div></div>").attr("title","Hide/Show Columns").click(function(){a(z.nDiv).toggle();return true});if(v.showToggleBtn){a(z.gDiv).prepend(z.nBtn)}}a(z.iDiv).addClass("iDiv").css({display:"none"});a(z.bDiv).append(z.iDiv);a(z.bDiv).hover(function(){a(z.nDiv).hide();a(z.nBtn).hide()},function(){if(z.multisel){z.multisel=false}});a(z.gDiv).hover(function(){},function(){a(z.nDiv).hide();a(z.nBtn).hide()});a(document).mousemove(function(g){z.dragMove(g)}).mouseup(function(g){z.dragEnd()}).hover(function(){},function(){z.dragEnd()});if(a.browser.msie&&a.browser.version<7){a(".hDiv,.bDiv,.mDiv,.pDiv,.vGrip,.tDiv, .sDiv",z.gDiv).css({width:"100%"});a(z.gDiv).addClass("ie6");if(v.width!="auto"){a(z.gDiv).addClass("ie6fullwidthbug")}}z.rePosDrag();z.fixHeight();r.p=v;r.grid=z;if(v.url&&v.autoload){z.populate()}return r};var b=false;a(document).ready(function(){b=true});a.fn.flexigrid=function(c){return this.each(function(){if(!b){a(this).hide();var d=this;a(document).ready(function(){a.addFlex(d,c)})}else{a.addFlex(this,c)}})};a.fn.flexReload=function(c){return this.each(function(){if(this.grid&&this.p.url){this.grid.populate()}})};a.fn.flexOptions=function(c){return this.each(function(){if(this.grid){a.extend(this.p,c)}})};a.fn.flexToggleCol=function(d,c){return this.each(function(){if(this.grid){this.grid.toggleCol(d,c)}})};a.fn.flexAddData=function(c){return this.each(function(){if(this.grid){this.grid.addData(c)}})};a.fn.noSelect=function(c){if(c==null){prevent=true}else{prevent=c}if(prevent){return this.each(function(){if(a.browser.msie||a.browser.safari){a(this).bind("selectstart",function(){return false})}else{if(a.browser.mozilla){a(this).css("MozUserSelect","none");a("body").trigger("focus")}else{if(a.browser.opera){a(this).bind("mousedown",function(){return false})}else{a(this).attr("unselectable","on")}}}})}else{return this.each(function(){if(a.browser.msie||a.browser.safari){a(this).unbind("selectstart")}else{if(a.browser.mozilla){a(this).css("MozUserSelect","inherit")}else{if(a.browser.opera){a(this).unbind("mousedown")}else{a(this).removeAttr("unselectable","on")}}}})}}})(jQuery);