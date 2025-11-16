import React from 'react';
import config from '../config';

interface MailEditIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MailEditIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mail-edit)
 * @see {@link https://clicons.dev/icon/mail-edit}
 */
const MailEditIcon = React.forwardRef<SVGSVGElement, MailEditIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M2 5.5L8.91302 9.41697C11.4616 10.861 12.5384 10.861 15.087 9.41697L22 5.5'
    }
  ],
  [
    'path',
    {
      d: 'M21.9953 10.0284C21.9299 6.96114 21.8972 5.42749 20.7655 4.29141C19.6337 3.15532 18.0586 3.11574 14.9083 3.03659C12.9668 2.98781 11.0443 2.9878 9.10276 3.03658C5.95252 3.11573 4.3774 3.1553 3.24564 4.29139C2.11389 5.42748 2.08118 6.96113 2.01577 10.0284C1.99474 11.0147 1.99474 11.9951 2.01577 12.9814C2.08119 16.0487 2.11389 17.5823 3.24565 18.7184C4.3774 19.8545 5.95252 19.8941 9.10277 19.9732C9.57102 19.985 10.0382 19.9939 10.5047 20'
    }
  ],
  [
    'path',
    {
      d: 'M20.8522 13.4391L21.5446 14.1315C22.1304 14.7172 22.1304 15.667 21.5446 16.2528L17.9172 19.9484C17.6319 20.2338 17.2669 20.4262 16.8702 20.5002L14.622 20.9883C14.2671 21.0653 13.951 20.7502 14.027 20.395L14.5056 18.1597C14.5796 17.763 14.772 17.398 15.0574 17.1126L18.7309 13.4391C19.3167 12.8533 20.2665 12.8533 20.8522 13.4391Z'
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

MailEditIcon.displayName = 'MailEditIcon';
export default MailEditIcon;
