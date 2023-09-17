<script setup>
import Fieldset from 'primevue/fieldset';

</script>

<template> 

    <div class="card footer"  >
      <Fieldset legend="Creator Name" :toggleable="true">
          <p>
              Made by Karipzhanov.T
          </p>
      </Fieldset>
  </div>
 
</template>

<style scoped> 
.footer,.fieldset{
  background-color: #00bcd4;
  color: white;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
}
:deep(.p-toggleable-content){
  background-color: #00bcd4 !important;
}
:deep(.p-fieldset-legend){
  background-color: #FFF59D !important;
}

:deep(.p-fieldset-legend-text){
  color:#EF9A9A !important;
}

:deep(.p-fieldset-toggleable){
  background-color: #90CAF9 !important;
  color:#C5E1A5 !important;
}


</style>