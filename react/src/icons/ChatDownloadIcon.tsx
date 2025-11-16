import React from 'react';
import config from '../config';

interface ChatDownloadIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ChatDownloadIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/chat-download)
 * @see {@link https://clicons.dev/icon/chat-download}
 */
const ChatDownloadIcon = React.forwardRef<SVGSVGElement, ChatDownloadIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.0045 11H12.0135M8.00903 11H8.018'
    }
  ],
  [
    'path',
    {
      d: 'M22 11C22 11.7708 21.9865 12.5232 21.9609 13.2497C21.8772 15.6232 21.8353 16.8099 20.8699 17.7826C19.9046 18.7552 18.6843 18.8074 16.2437 18.9118C15.5098 18.9432 14.7498 18.9667 13.9693 18.9815C13.2282 18.9955 12.8576 19.0026 12.532 19.1266C12.2064 19.2506 11.9325 19.4855 11.3845 19.9553L9.20503 21.8242C9.07273 21.9376 8.90419 22 8.72991 22C8.32679 22 8 21.6732 8 21.2701V18.9219C7.91842 18.9186 7.83715 18.9153 7.75619 18.9118C5.31569 18.8074 4.09545 18.7552 3.13007 17.7825C2.16469 16.8099 2.12282 15.6232 2.03909 13.2497C2.01346 12.5232 2 11.7708 2 11C2 10.2292 2.01346 9.47679 2.03909 8.7503C2.12282 6.37683 2.16469 5.19009 3.13007 4.21745C4.09545 3.24481 5.3157 3.1926 7.7562 3.08819C9.09517 3.0309 10.5209 3 12 3C12.3362 3 12.6697 3.0016 13 3.00474'
    }
  ],
  [
    'path',
    {
      d: 'M22 6.00002C22 6.00002 19.7906 8.99999 19 9C18.2095 9.00001 16 6 16 6M19 8.5V2'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

ChatDownloadIcon.displayName = 'ChatDownloadIcon';
export default ChatDownloadIcon;
