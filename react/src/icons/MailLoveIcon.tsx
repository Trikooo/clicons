import React from 'react';
import config from '../config';

interface MailLoveIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MailLoveIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mail-love)
 * @see {@link https://clicons.dev/icon/mail-love}
 */
const MailLoveIcon = React.forwardRef<SVGSVGElement, MailLoveIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 5.5L8.91302 9.42462C11.4387 10.8585 12.5613 10.8585 15.087 9.42462L22 5.5'
    }
  ],
  [
    'path',
    {
      d: 'M11.5 19.9959C11.0337 19.9898 9.56682 20.0077 9.09883 19.9959C5.95033 19.9166 4.37608 19.877 3.24496 18.7394C2.11383 17.6018 2.08114 16.0661 2.01577 12.9947C1.99475 12.0071 1.99474 11.0254 2.01576 10.0378C2.08114 6.96642 2.11382 5.43072 3.24495 4.29312C4.37608 3.15551 5.95033 3.11588 9.09882 3.03663C11.0393 2.98779 12.9607 2.98779 14.9012 3.03664C18.0497 3.1159 19.6239 3.15553 20.755 4.29313C21.8862 5.43073 21.9189 6.96643 21.9842 10.0378C21.9983 10.6973 22.0029 10.3542 21.9982 11.012'
    }
  ],
  [
    'path',
    {
      d: 'M15.015 14.3866C16.0876 13.7469 17.0238 14.0047 17.5863 14.4153C17.8169 14.5837 17.9322 14.6679 18 14.6679C18.0678 14.6679 18.1831 14.5837 18.4137 14.4153C18.9762 14.0047 19.9124 13.7469 20.985 14.3866C22.3928 15.2261 22.7113 17.9958 19.4642 20.3324C18.8457 20.7775 18.5365 21 18 21C17.4635 21 17.1543 20.7775 16.5358 20.3324C13.2887 17.9958 13.6072 15.2261 15.015 14.3866Z'
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

MailLoveIcon.displayName = 'MailLoveIcon';
export default MailLoveIcon;
