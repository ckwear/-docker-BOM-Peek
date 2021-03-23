<template>
    <footer id="footer">
        Copyright © {{company.name}} Corp. All rights reserved.
    </footer>
</template>
<script>
export default {
  data() {
    return{
      company: {
          name:'VETEC'
        },
    }
  },
  mounted: function() {
    this.urlChk();    
  },
  methods: {
    urlChk() {
    var currentUrl = window.location.host ;
    if(currentUrl === "peak.aistier-bom.com") {
      this.company.name = "AIStier"
    }else {
       this.company.name = "VETEC"
    }
    
    },
  }
}
</script>
