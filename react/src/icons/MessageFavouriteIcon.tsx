import React from 'react';
import config from '../config';

interface MessageFavouriteIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MessageFavouriteIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/message-favourite)
 * @see {@link https://clicons.dev/icon/message-favourite}
 */
const MessageFavouriteIcon = React.forwardRef<SVGSVGElement, MessageFavouriteIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.5 15H15.5M8.5 10H12'
    }
  ],
  [
    'path',
    {
      d: 'M21.9598 10.9707C21.9711 11.146 21.98 11.3226 21.9866 11.4999C22.011 12.1626 22.0021 12.8359 21.9598 13.4908C21.6856 17.7332 18.3536 21.1124 14.1706 21.3905C12.7435 21.4853 11.2536 21.4851 9.8294 21.3905C9.33896 21.3579 8.8044 21.2408 8.34401 21.0512C7.83177 20.8403 7.5756 20.7347 7.44544 20.7508C7.31527 20.7668 7.1264 20.906 6.74868 21.1846C6.08268 21.6757 5.24367 22.0284 3.99943 21.9981C3.37026 21.9828 3.05568 21.9752 2.91484 21.735C2.77401 21.4949 2.94941 21.1625 3.30021 20.4978C3.78674 19.5758 4.09501 18.5203 3.62791 17.6746C2.82343 16.4665 2.1401 15.0359 2.04024 13.4908C1.98659 12.6606 1.98659 11.8009 2.04024 10.9707C2.31441 6.72832 5.64639 3.34908 9.8294 3.07102C10.3789 3.03449 10.4383 3.01203 11 3.00366'
    }
  ],
  [
    'path',
    {
      d: 'M15.015 2.38661C16.0876 1.74692 17.0238 2.00471 17.5863 2.41534C17.8169 2.58371 17.9322 2.66789 18 2.66789C18.0678 2.66789 18.1831 2.58371 18.4137 2.41534C18.9762 2.00471 19.9124 1.74692 20.985 2.38661C22.3928 3.22614 22.7113 5.99577 19.4642 8.33241C18.8457 8.77747 18.5365 9 18 9C17.4635 9 17.1543 8.77747 16.5358 8.33241C13.2887 5.99577 13.6072 3.22614 15.015 2.38661Z'
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

MessageFavouriteIcon.displayName = 'MessageFavouriteIcon';
export default MessageFavouriteIcon;
