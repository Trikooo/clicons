import React from 'react';
import config from '../config';

interface Inbox2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Inbox2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/inbox2)
 * @see {@link https://clicons.dev/icon/inbox2}
 */
const Inbox2Icon = React.forwardRef<SVGSVGElement, Inbox2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8 3C7.28543 3.05475 6.78159 3.18135 6.34921 3.47408C5.58736 3.98988 5.22202 4.90323 4.49134 6.72994L2.42914 11.9271C2.21522 12.4619 2.10826 12.7293 2.05413 13.0104C2 13.2915 2 13.5795 2 14.1555V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V14.1555C22 13.5795 22 13.2915 21.9459 13.0104C21.8917 12.7293 21.7848 12.4619 21.5709 11.9271L19.5087 6.72994C18.778 4.90323 18.4126 3.98988 17.6508 3.47408C17.2184 3.18135 16.7146 3.05475 16 3'
    }
  ],
  [
    'path',
    {
      d: 'M2.5 13H5.58579C6.16263 13 6.45105 13 6.71982 13.0766C6.86747 13.1187 7.00978 13.1776 7.14394 13.2523C7.38816 13.3882 7.59211 13.5921 8 14C8.40789 14.4079 8.61184 14.6118 8.85606 14.7477C8.99022 14.8224 9.13253 14.8813 9.28018 14.9234C9.54895 15 9.83737 15 10.4142 15H13.5858C14.1626 15 14.4511 15 14.7198 14.9234C14.8675 14.8813 15.0098 14.8224 15.1439 14.7477C15.3882 14.6118 15.5921 14.4079 16 14C16.4079 13.5921 16.6118 13.3882 16.8561 13.2523C16.9902 13.1776 17.1325 13.1187 17.2802 13.0766C17.5489 13 17.8374 13 18.4142 13H20.5H21.5'
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

Inbox2Icon.displayName = 'Inbox2Icon';
export default Inbox2Icon;
