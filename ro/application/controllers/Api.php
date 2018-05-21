<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require(APPPATH.'libraries/REST_Controller.php');

class Api extends REST_Controller {
   
   public function send_mail_post()
   {
      $data = $this->post();
      if( !isset($data['name']) || !isset($data['email']) || !isset($data['message']) || !isset($data['code']))
         $this->response(NULL,403);
      
      $data['to'] = base64_decode($data['code']);

      if( $this->_send_mail($data) )
         $this->response(['success' => TRUE]);
      else
         $this->response(['success' => FALSE]);
   }

   private function _send_mail( $data ){
      $config = array(
         'charset'   => 'utf-8', 
         'newline'   => "\r\n",  
         'protocol' => 'smtp',
         'smtp_host' => 'ssl://gator4151.hostgator.com',
         'smtp_port' => 465,
         'smtp_user' => 'mailer@josuearambide.com',
         'smtp_pass' => 'ql[W.Fnz{vTV',
         'mailtype'  => 'html'
      );

      // Load email library and passing configured values to email library
      $this->load->library('email',$config);

      $this->email->from('mailer@josuearambide.com', 'Mail de Contacto');
      $this->email->to( $data['to'] );

      if( isset($data['copy']) && $data['copy'] == TRUE )
         $this->email->cc( $data['email'] );

      $this->email->subject('Mensaje de Contacto desde la web');

      $this->email->message("<h4>Mensaje Enviado desde la web:</h4><p><b>Nombres:</b>".$data['name']."</p><p><b>Correo:</b> ".$data['email']."</p><p><b>Mensaje:</b> ".$data['message']."</p>");

      if($this->email->send())
         return TRUE;
      else
         return FALSE;
   }

}

/* End of file Api.php */
