$(".four-str-btn").on("click",function(t){var e=[],l=""!=$(".tach-htf").val()?$(".tach-htf").val().split(","):[],n="<h5>TACH</h5>";if(""!=$(".tach-htf").val()&&(n=n+'<h5 class="mb-0 text-danger">à¸£à¸ªà¸™ / HTF: '+$(".tach-htf").val()+"</h5>"),""!=$(".total-htf").val()&&(n+='<h5 class="mb-0">TOTAL</h5>',""!=$(".total-htf").val()&&(n=n+'<h5 class="mb-0 text-danger">à¸£à¸ªà¸™ / HTF: '+$(".total-htf").val()+"</h5>")),$(".input-number-html").html(n),""!=l)for(var i=0;i<=9999;){let a=String(i);if("0"==a)var h="0000";else if(1==a.length)var h="000";else if(2==a.length)var h="00";else if(3==a.length)var h="0";else var h="";a=h+String(i);let o=0,r=0;$.each(l,function(t,e){var l=String(e).split("");let n=0;$.each(l,function(t,e){-1!=a.search(String(e))&&(n=1)}),1==n&&r++,o++}),o==r&&e.push(a),i++}let c=[];e.length>0&&c.push(e);var f=String($(".total-htf").val()).split("");let s=[];if($.each(c,function(t,e){$.each(e,function(t,e){var l=String(e);let n=total_value_number(l);if(f.length>0){let i=0;$.each(f,function(t,e){if(-1!=n.charAt(n.length-1).search(String(e)))return i=1,!1}),1==i&&s.push(l)}})}),f.length>0){let m=[];if(s.length>0&&m.push(s),m.length>0){var u=m.reduce((t,e)=>t.filter(t=>e.includes(t)));$(".number-gen-digits").html("<p>"+u.join(", ")+"</p>"),$(".total-dimention .dimention").text("4D"),$(".total-dimention .number-of-variation").text(u.length),$(".game-type-modal-text").text("Straight"),$("#ticket_code").modal("show")}}else if(c.length>0){var g=c.reduce((t,e)=>t.filter(t=>e.includes(t)));$(".number-gen-digits").html("<p>"+g.join(", ")+"</p>"),$(".total-dimention .dimention").text("4D"),$(".total-dimention .number-of-variation").text(g.length),$(".game-type-modal-text").text("Straight"),$("#ticket_code").modal("show")}}),$(".four-rm-btn").on("click",function(t){var e=[],l=""!=$(".tach-htf").val()?$(".tach-htf").val().split(","):[];if(""!=l)for(var n=0;n<=9999;){let i=String(n);if("0"==i)var a="0000";else if(1==i.length)var a="000";else if(2==i.length)var a="00";else if(3==i.length)var a="0";else var a="";i=a+String(n);let h=0,o=0;$.each(l,function(t,e){var l=String(e).split("");let n=0;$.each(l,function(t,e){-1!=i.search(String(e))&&(n=1)}),1==n&&o++,h++}),h==o&&e.push(i),n++}let r=[];e.length>0&&r.push(e);var c=String($(".total-htf").val()).split("");let f=[];if($.each(r,function(t,e){$.each(e,function(t,e){var l=String(e);let n=total_value_number(l);if(c.length>0){let i=0;$.each(c,function(t,e){if(-1!=n.charAt(n.length-1).search(String(e)))return i=1,!1}),1==i&&f.push(l)}})}),c.length>0){let s=[];if(f.length>0&&s.push(f),s.length>0){var m=s.reduce((t,e)=>t.filter(t=>e.includes(t)));m=rum_array_purify(m),$(".number-gen-digits").html("<p>"+m.join(", ")+"</p>"),$(".total-dimention .dimention").text("4D"),$(".total-dimention .number-of-variation").text(m.length),$(".game-type-modal-text").text("Rumble"),$("#ticket_code").modal("show")}}else if(r.length>0){var u=r.reduce((t,e)=>t.filter(t=>e.includes(t)));u=rum_array_purify(u),$(".number-gen-digits").html("<p>"+u.join(", ")+"</p>"),$(".total-dimention .dimention").text("4D"),$(".total-dimention .number-of-variation").text(u.length),$(".game-type-modal-text").text("Rumble"),$("#ticket_code").modal("show")}});
